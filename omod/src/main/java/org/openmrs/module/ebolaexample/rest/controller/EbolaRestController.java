package org.openmrs.module.ebolaexample.rest.controller;

import org.openmrs.api.LocationService;
import org.openmrs.api.PatientService;
import org.openmrs.module.ebolaexample.api.BedAssignmentService;
import org.openmrs.module.webservices.rest.web.RestConstants;
import org.openmrs.module.webservices.rest.web.v1_0.controller.MainResourceController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/rest/" + RestConstants.VERSION_1 + "/ebola")
public class EbolaRestController extends MainResourceController {

	@Autowired
	BedAssignmentService bedAssignmentService;

	@Autowired
	LocationService locationService;

	@Autowired
	PatientService patientService;

	@Override
	public String getNamespace() {
		return "v1/ebola";
	}

	@RequestMapping(value = "/ward/{wardUuid}/bed/{bedUuid}", method = RequestMethod.POST)
	@ResponseBody
	public void assignPatient(@PathVariable String wardUuid, @PathVariable String bedUuid,
							  @RequestBody String patientUuid) {
		bedAssignmentService.assign(patientService.getPatientByUuid(patientUuid),
				locationService.getLocationByUuid(bedUuid));
	}

}
