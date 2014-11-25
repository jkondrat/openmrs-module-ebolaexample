package org.openmrs.module.ebolaexample.rest.resource;

import org.openmrs.Location;
import org.openmrs.LocationTag;
import org.openmrs.api.LocationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.ebolaexample.WardBedAssignments;
import org.openmrs.module.ebolaexample.api.BedAssignmentService;
import org.openmrs.module.ebolaexample.metadata.EbolaMetadata;
import org.openmrs.module.emrapi.adt.AdtService;
import org.openmrs.module.webservices.rest.web.RequestContext;
import org.openmrs.module.webservices.rest.web.RestConstants;
import org.openmrs.module.webservices.rest.web.annotation.Resource;
import org.openmrs.module.webservices.rest.web.representation.DefaultRepresentation;
import org.openmrs.module.webservices.rest.web.representation.FullRepresentation;
import org.openmrs.module.webservices.rest.web.representation.RefRepresentation;
import org.openmrs.module.webservices.rest.web.representation.Representation;
import org.openmrs.module.webservices.rest.web.resource.api.PageableResult;
import org.openmrs.module.webservices.rest.web.resource.impl.DelegatingCrudResource;
import org.openmrs.module.webservices.rest.web.resource.impl.DelegatingResourceDescription;
import org.openmrs.module.webservices.rest.web.resource.impl.NeedsPaging;
import org.openmrs.module.webservices.rest.web.response.ResponseException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Resource(name = RestConstants.VERSION_1 + "/ebola/ward", supportedClass = WardBedAssignments.class,
		supportedOpenmrsVersions = {"1.9."})
public class WardResource extends DelegatingCrudResource<WardBedAssignments> {

	@Override
	public DelegatingResourceDescription getRepresentationDescription(Representation representation) {
		DelegatingResourceDescription description = new DelegatingResourceDescription();
		description.addProperty("ward", representation);
		description.addProperty("bedAssignments", representation);
		description.addSelfLink();
		if (!(representation instanceof FullRepresentation)) {
			description.addLink("full", ".?v=" + RestConstants.REPRESENTATION_FULL);
		}
		return description;
	}

	@Override
	public WardBedAssignments getByUniqueId(String wardUuid) {
		return Context.getService(BedAssignmentService.class).getBedAssignments(
				Context.getService(LocationService.class).getLocationByUuid(wardUuid));
	}

	@Override
	protected PageableResult doGetAll(RequestContext context) throws ResponseException {
		List<WardBedAssignments> assignments = new ArrayList<WardBedAssignments>();
		LocationService locationService = Context.getLocationService();
		LocationTag[] wardTags = {locationService.getLocationTagByUuid(EbolaMetadata._LocationTag.EBOLA_CONFIRMED_WARD),
				locationService.getLocationTagByUuid(EbolaMetadata._LocationTag.EBOLA_RECOVERY_WARD),
				locationService.getLocationTagByUuid(EbolaMetadata._LocationTag.EBOLA_SUSPECT_WARD)};
		for(Location location : locationService.getLocationsHavingAnyTag(Arrays.asList(wardTags))) {
			assignments.add(Context.getService(BedAssignmentService.class).getBedAssignments(location));
		}
		return new NeedsPaging<WardBedAssignments>(assignments, context);
	}

	@Override
	public WardBedAssignments newDelegate() {
		return new WardBedAssignments();
	}

	@Override
	protected void delete(WardBedAssignments wardBedAssignments, String s, RequestContext requestContext) throws ResponseException {

	}

	@Override
	public WardBedAssignments save(WardBedAssignments wardBedAssignments) {
		return null;
	}

	@Override
	public void purge(WardBedAssignments wardBedAssignments, RequestContext requestContext) throws ResponseException {

	}

	@Override
	protected String getUniqueId(WardBedAssignments delegate) {
		return null;
	}
}
