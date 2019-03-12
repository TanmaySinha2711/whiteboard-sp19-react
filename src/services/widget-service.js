let _singleton = Symbol();

class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate another instance');
        this.URL = "http://localhost:8080"
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }

    createHeadingWidget(topicId) {
        return fetch(this.URL + "/api/topics/" + topicId + "/heading/widget",
            {body: JSON.stringify({
                    title: "new heading",
                    type:"HEADING",
                    size: 1
                }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllWidgetsForTopic(topicId) {
        return fetch(this.URL + "/api/topics/" + topicId + "/widgets")
            .then(function (response) {
                return response.json();
            })
    }

}
export default WidgetService;
