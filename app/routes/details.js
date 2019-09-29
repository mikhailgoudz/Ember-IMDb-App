import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'details',
    async model(params) {
        return {
            details: this.store.queryRecord('detail', {
                i: params.moveID
            })
        }
    }

});
