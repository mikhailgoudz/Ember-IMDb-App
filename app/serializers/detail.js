import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var type = primaryModelClass.modelName;

    // requestType
    //
    return {
      data:
      {
        id: payload.imdbID,
        type: type,
        attributes: payload
      }
    }
  }
});
