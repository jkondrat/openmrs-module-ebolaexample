package org.openmrs.module.ebolaexample.rest;

import org.apache.commons.beanutils.PropertyUtils;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.Location;
import org.openmrs.LocationTag;
import org.openmrs.Patient;
import org.openmrs.api.LocationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.ebolaexample.api.BedAssignmentService;
import org.openmrs.module.ebolaexample.metadata.EbolaMetadata;
import org.openmrs.module.webservices.rest.SimpleObject;
import org.openmrs.module.webservices.rest.web.v1_0.controller.MainResourceControllerTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.web.bind.annotation.RequestMethod;

public class WardResourceTest extends MainResourceControllerTest {

	protected static final String BASE_TEST_DATASET_XML = "baseTestDataset.xml";

	protected static final String INITIAL_DATA_XML = "WardResourceTest-initialData.xml";

	@Autowired
	private EbolaMetadata ebolaMetadata;

	@Autowired
	private LocationService locationService;

	@Autowired
	private BedAssignmentService bedAssignmentService;

	@Before
	public void setup() throws Exception {
		executeDataSet(BASE_TEST_DATASET_XML);
		ebolaMetadata.install();
		executeDataSet(INITIAL_DATA_XML);

		LocationTag inpatientBedTag = locationService.getLocationTagByUuid(EbolaMetadata._LocationTag.INPATIENT_BED);
		LocationTag confirmedWardTag = locationService.getLocationTagByUuid(EbolaMetadata._LocationTag.EBOLA_CONFIRMED_WARD);
		locationService.getLocation(5).getTags().add(confirmedWardTag);
		locationService.getLocation(6).getTags().add(inpatientBedTag);
		Patient patient = Context.getPatientService().getPatient(7);
		Location bed = Context.getLocationService().getLocation(6);
		bedAssignmentService.assign(patient, bed);
	}

	@Override
	@Test
	public void shouldGetDefaultByUuid() throws Exception {
		MockHttpServletResponse response = handle(request(RequestMethod.GET, getURI() + "/" + getUuid()));
		SimpleObject result = deserialize(response);

		Assert.assertNotNull(result);
		Assert.assertEquals(getUuid(), PropertyUtils.getProperty(result, "ward.uuid"));
	}

	@Override
	@Test
	public void shouldGetRefByUuid() throws Exception {
		MockHttpServletRequest request = request(RequestMethod.GET, getURI() + "/" + getUuid());
		request.addParameter("v", "ref");
		SimpleObject result = deserialize(handle(request));

		Assert.assertNotNull(result);
		Assert.assertEquals(getUuid(), PropertyUtils.getProperty(result, "ward.uuid"));
	}

	@Override
	@Test
	public void shouldGetFullByUuid() throws Exception {
		MockHttpServletRequest request = request(RequestMethod.GET, getURI() + "/" + getUuid());
		request.addParameter("v", "full");
		SimpleObject result = deserialize(handle(request));

		Assert.assertNotNull(result);
		Assert.assertEquals(getUuid(), PropertyUtils.getProperty(result, "ward.uuid"));
	}

	@Override
	public String getURI() {
		return "/ebola/ward";
	}

	@Override
	public long getAllCount() {
		return 1;
	}

	@Override
	public String getUuid() {
		return "8d6c993e-c2cc-11de-8d13-0010c6dffd0x";
	}

}
