var module = angular.module('inpatientForm')

module.factory("observationsFactory", function(conceptMappingFactory) {
  var that = this;

  this.createObservations = function(modelQuestions) {

    var postList = [];

    var symptom = {
      concept: "1727AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      conceptQuestion: "1728AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      conceptAnswer: "1729AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }


    angular.forEach(modelQuestions, function(modelQuestionValue, modelQuestionKey) {
      angular.forEach(conceptMappingFactory, function(concept) {
        if (concept.id === modelQuestionKey) {
          var post = that.createPost(concept, modelQuestionValue, symptom);
          postList.push(post);
          postList = _.compact(_.flatten(postList));
        }
      });

    });

    return postList;
  }

  this.createPost = function (concept, modelQuestionValue, symptom) {
    if (that.isBleeding(concept.type) && _.contains(modelQuestionValue, true)) {
      return that.createSymptomPost(symptom, concept, modelQuestionValue);
    } else if (that.isSymptom(concept.type)) {
      return that.createSymptomPost(symptom, concept, modelQuestionValue);
    } else if (that.isNonCoded(concept.type) && modelQuestionValue) {
      return that.createNonCodedPost(concept, modelQuestionValue);
    } else if (that.isCoded(concept.type)) {
      return that.createCodedPosts(concept, modelQuestionValue);
    }
  }

  this.createCodedPosts = function(concept, value) {
    var codedPostList = [];
    var values = that.findAnswer(concept.answers, value, true);

    _.each(values, function(value){
      var codedPost = {};
      codedPost.concept = concept.conceptId;
      codedPost.value = value;
      codedPostList.push(codedPost);
    });

    return codedPostList;

  }

  this.createNonCodedPost = function(concept, value) {
      var post = {};
      post.concept = concept.conceptId;
      post.value = value;
      return post;
  }

  this.createSymptomPost = function(symptom, concept, value) {
    var post = {};
    post.concept = symptom.concept;
    post.groupMembers = that.createGroupMembers(symptom, concept, that.findAnswer(concept.answers, value));
    return post;
  }

  this.createGroupMembers = function(symptom, concept, value) {
    var groupMembers = [{
      concept: symptom.conceptQuestion,
      value: concept.conceptId
    }, {
      concept: symptom.conceptAnswer,
      value: value
    }];
    return groupMembers;
  }

  // Yeah, I know!
  this.isSymptom = function(type) {
    return type === "symptom";
  };

  this.isBleeding = function(type) {
    return type === "bleeding";
  };

  this.isCoded = function(type) {
    return type === "coded";
  };

  this.isNonCoded = function(type) {
    return type === "non-coded";
  };

  this.findAnswer = function(answers, value, hasMultipleOptions) {
    hasMultipleOptions = (typeof hasMultipleOptions !== 'undefined' ? hasMultipleOptions : false );

    var response = [];
    angular.forEach(answers, function(answer) {
      if (answer.id === value || value[answer.id]) {
        response.push(answer.conceptId);
      }
    });
    return (hasMultipleOptions) ? response : response[0];
  };

  return {
    get: function(modelQuestions) {
      return that.createObservations(modelQuestions);
    }
  }
});
