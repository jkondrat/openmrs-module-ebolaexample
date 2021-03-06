var module = angular.module('inpatientForm')

module.factory("conceptMappingFactory", function() {

  function createQuestion(formId, conceptType, conceptUuid) {
    var question = {
      id: formId,
      type: conceptType,
      conceptId: conceptUuid
    }
    return question;
  }

  function createAnswer(formId, conceptUuid) {
    var answer = {
      id: formId,
      conceptId: conceptUuid
    }
    return answer;
  }

  var answerYes = createAnswer("yes", "1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  var answerNo = createAnswer("no", "1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  var answerTrue = createAnswer(true, "1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  var answerFalse = createAnswer(false, "1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  var answerUnknown = createAnswer("unknown", "1067AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

  var booleanAnswers = [answerYes, answerNo, answerTrue, answerFalse, answerUnknown];

  function createCurrentConsciousness() {
    var question = createQuestion("currentConsciousness", "coded", "162643AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerA = createAnswer("a", "160282AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerV = createAnswer("v", "162645AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerP = createAnswer("p", "162644AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerU = createAnswer("u", "159508AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerA, answerV, answerP, answerU];
    return question;
  }


  function createTemperature() {
    var question = createQuestion("temperature", "non-coded", "5088AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createOxygenSaturation() {
    var question = createQuestion("oxygenSaturation", "non-coded", "5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createRespiratoryRate() {
    var question = createQuestion("respiratoryRate", "non-coded", "5242AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createHeartRate() {
    var question = createQuestion("heartRate", "non-coded", "5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createSystolicBP() {
    var question = createQuestion("systolicBP", "non-coded", "5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createDiastolicBP() {
    var question = createQuestion("diastolicBP", "non-coded", "5086AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createRaisedJVP() {
    var question = createQuestion("raisedJVP", "non-coded", "162646AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createCapillaryRefillTime() {
    var question = createQuestion("capillaryRefillTime", "non-coded", "162513AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createAbdomenTender() {
    var question = createQuestion("abdomenTender", "symptom", "5105AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerYes = createAnswer("yes", "1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNo = createAnswer("no", "1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerYes, answerNo];
    return question;
  }

  function createPaleAnaemia() {
    var question = createQuestion("paleAnaemia", "symptom", "131004AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNone = createAnswer("none", "1107AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerMild = createAnswer("mild", "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerModerate = createAnswer("moderate", "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerSevere = createAnswer("severe", "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerNone, answerMild, answerModerate, answerSevere];
    return question;
  }

  function createOralFluids() {
    var question = createQuestion("oralFluids", "non-coded", "162658AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createDehydration() {
    var question = createQuestion("dehydration", "symptom", "142630AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNone = createAnswer("none", "1107AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerMild = createAnswer("mild", "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerModerate = createAnswer("moderate", "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerSevere = createAnswer("severe", "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerNone, answerMild, answerModerate, answerSevere];
    return question;
  }

  function createUrineOutput() {
    var question = createQuestion("urineOutput", "coded", "162647AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNormal = createAnswer("normal", "1115AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNone = createAnswer("none", "1107AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerReduced = createAnswer("reduced", "162648AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerUnknown = createAnswer("unknown", "1067AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerNormal, answerNone, answerReduced, answerUnknown];
    return question;
  }

  function createVomiting() {
    var question = createQuestion("vomiting", "coded", "122983AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNone = createAnswer("none", "1107AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerMild = createAnswer("mild", "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerModerate = createAnswer("moderate", "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerSevere = createAnswer("severe", "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerNone, answerMild, answerModerate, answerSevere];
    return question;
  }

  function createStoolType() {
    var question = createQuestion("mainStoolType", "coded", "162654AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerFormed = createAnswer("formed", "162655AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerLiquid = createAnswer("liquid", "162657AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerSemiFormed = createAnswer("semiFormed", "162656AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNone = createAnswer("none", "1107AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerFormed, answerLiquid, answerSemiFormed, answerNone];
    return question;
  }

  function createStoolFrequency() {
    var question = createQuestion("stoolFreq", "non-coded", "1837AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createFluidManagement(){
    var question = createQuestion("fluidManagement", "coded", "162653AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerORS = createAnswer("ORS", "351AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerIVMaintenance = createAnswer("IVMaintenance", "162651AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerIVIORessucitate = createAnswer("IVIOResuscitate", "162650AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerJelly = createAnswer("jelly", "162649AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerBloodTransfusion = createAnswer("bloodTransfusion", "1063AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerFluidRestrict = createAnswer("fluidRestrict", "162652AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerORS, answerIVMaintenance, answerIVIORessucitate, answerJelly, answerBloodTransfusion, answerFluidRestrict];
    return question;

  }

  function createTargetVolume(){
    var question = createQuestion("volume", "non-coded", "162675AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [];
    return question;
  }

  function createAntiMalarials(){
    var question = createQuestion("antiMalarials", "coded", "162686AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerALACT = createAnswer("alAct", "162674AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerArtesunate = createAnswer("artesunate", "71561AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerQuinine = createAnswer("quinine", "83023AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerALACT, answerArtesunate, answerQuinine];
    return question;
  }

  function createAntibiotics(){
    var question = createQuestion("antibiotics", "coded", "162687AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerCeftriaxone = createAnswer("ceftriaxone", "73041AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerCefixime = createAnswer("cefixime", "73006AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerMetronidazole = createAnswer("metronidazole", "79782AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerCeftriaxone, answerCefixime, answerMetronidazole];
    return question;
  }

  function createAnalgesicsAntipyretics(){
    var question = createQuestion("analgesicsAntipyretics", "coded", "162688AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerParacetamol = createAnswer("paracetamol", "70116AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerTramadol = createAnswer("tramadol", "85275AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerMorphine = createAnswer("morphine", "80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerParacetamol, answerTramadol, answerMorphine];
    return question;
  }

  function createOverallSymptoms() {
    var question = createQuestion("overallSymptoms", "symptom", "162676AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerSame = createAnswer("same", "162679AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerWorse = createAnswer("worse", "162678AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerBetter = createAnswer("better", "162677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerSame, answerWorse, answerBetter];
    return question;
  }

  function createFatigue() {
    var question = createQuestion("fatigue", "symptom", "140501AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNone = createAnswer("none", "1107AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerMild = createAnswer("mild", "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerModerate = createAnswer("moderate", "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerSevere = createAnswer("severe", "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerNone, answerMild, answerModerate, answerSevere];
    return question;
  }

  function createHeadache() {
    var question = createQuestion("headache", "symptom", "139084AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  //don't use Join/Muscle Pain
  function createMusclePain() {
    var question = createQuestion("musclePain", "symptom", "133632AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createUrinePain() {
    var question = createQuestion("urinePain", "symptom", "118771AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createAbdominalPain() {
    var question = createQuestion("abdominalPain", "symptom", "151AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  //there is no concept id for this one
  function createUnableToEat() {
    var question = createQuestion("unableToEat", "symptom", "??????AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createUnableToDrink() {
    var question = createQuestion("unableToDrink", "symptom", "1983AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createDifficultToSwallow() {
    var question = createQuestion("difficultToSwallow", "symptom", "118789AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createDifficultToBreathe() {
    var question = createQuestion("difficultToBreathe", "symptom", "122496AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createRash() {
    var question = createQuestion("rash", "symptom", "512AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createHiccups() {
    var question = createQuestion("hiccups", "symptom", "138662AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createCough() {
    var question = createQuestion("cough", "symptom", "104224AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createBleedingFirstQuestion() {
    var question = createQuestion("bleeding", "bleeding", "147241AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = booleanAnswers;
    return question;
  }

  function createBleedingSecondQuestion() {
    var question = createQuestion("bleeding", "coded", "162668AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerNoseOral = createAnswer("noseOral", "160495AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerCough = createAnswer("cough", "162669AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerVomit = createAnswer("vomit", "162670AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerStool = createAnswer("stool", "162671AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerVaginal = createAnswer("vaginal", "162673AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    var answerOther = createAnswer("other", "5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    question.answers = [answerNoseOral, answerCough, answerVomit, answerStool, answerVaginal, answerOther];
    return question;

  }

  function loadMapping() {
    var conceptMapping = [];
    conceptMapping.push(createCurrentConsciousness());
    conceptMapping.push(createTemperature());
    conceptMapping.push(createOxygenSaturation());
    conceptMapping.push(createRespiratoryRate());
    conceptMapping.push(createHeartRate());
    conceptMapping.push(createSystolicBP());
    conceptMapping.push(createDiastolicBP());
    conceptMapping.push(createRaisedJVP());
    conceptMapping.push(createCapillaryRefillTime());
    conceptMapping.push(createAbdomenTender());
    conceptMapping.push(createPaleAnaemia());
    conceptMapping.push(createOralFluids());
    conceptMapping.push(createDehydration());
    conceptMapping.push(createUrineOutput());
    conceptMapping.push(createVomiting());
    conceptMapping.push(createStoolType());
    conceptMapping.push(createStoolFrequency());
    conceptMapping.push(createFluidManagement());
    conceptMapping.push(createTargetVolume());
    conceptMapping.push(createAntiMalarials());
    conceptMapping.push(createAntibiotics());
    conceptMapping.push(createAnalgesicsAntipyretics());
    conceptMapping.push(createOverallSymptoms());
    conceptMapping.push(createFatigue());
    conceptMapping.push(createHeadache());
    conceptMapping.push(createMusclePain());
    conceptMapping.push(createUrinePain());
    conceptMapping.push(createAbdominalPain());
    conceptMapping.push(createUnableToEat());
    conceptMapping.push(createUnableToDrink());
    conceptMapping.push(createDifficultToSwallow());
    conceptMapping.push(createDifficultToBreathe());
    conceptMapping.push(createRash());
    conceptMapping.push(createHiccups());
    conceptMapping.push(createCough());
    conceptMapping.push(createBleedingFirstQuestion());
    conceptMapping.push(createBleedingSecondQuestion());

    return conceptMapping;
  }

  return loadMapping();
});
