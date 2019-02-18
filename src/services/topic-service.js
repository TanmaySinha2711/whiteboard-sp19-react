let singleton = Symbol();

export default class TopicService {

    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
        this.URL = "https://web-dev-ass5-java.herokuapp.com"
    }
    static get instance() {
        if(!this[singleton])
            this[singleton] = new TopicService(singleton);
        return this[singleton]
    }

    createTopic(lessonId, topic) {
        return fetch(this.URL + "/api/lessons/{lid}/topics".replace('lid', lessonId),
            {body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllTopicsForLesson(lessonId) {
        return fetch(this.URL + "/api/lessons/lid/topics"
                .replace('lid', lessonId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteTopic(topicId) {
        return fetch(this.URL + "/api/topics/{tid}".replace
        ('lid', topicId), {
            method: 'delete'
        })
    }

    findTopicById(topicId) {
        return fetch(this.URL + "/api/topicss" + '/' + topicId)
            .then(function(response){
                return response.json();
            });
    }
}
