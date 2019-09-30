import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    var type = primaryModelClass.modelName;

   
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
