let _singleton = Symbol();

class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate another instance');
        this.URL = "https://web-dev-ass5-java.herokuapp.com"
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
                    size: 1,
                    text: "default, widget, text"
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

    deleteWidget(widgetId){
        return fetch(this.URL + "/api/widgets/" + widgetId, {
            method: 'DELETE'
        }).then(function (response) {
            return response;
        })
    }

    updateWidget(widgetId, widget){
        return fetch(this.URL + "/api/widgets/" + widgetId,
            {body: JSON.stringify(widget),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then(function (response) {
            return response.json();
        })
    }

}
export default WidgetService;
