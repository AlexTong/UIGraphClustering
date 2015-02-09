/**
 * Created by ronaklakhwani on 11/27/14.
 */
(function (nx) {
    nx.define('MainPageView', nx.ui.Component, {
        view : {
            content : {
                tag : 'div',
                content : [
                    {
                        //Left Page View (Sample Data)
                        tag : 'div',
                        props : {
                            'class' : 'sampleData'
                        },
                        content : [
                            {
                                name : 'leftPageData',
                                type : 'LeftPageView'
                            }
                        ]
                    },
                    {
                        //Button
                        tag : 'div',
                        props : {
                            'class' : 'buttonStyle'
                        },
                        content : [
                            {
                                tag : 'button',
                                props : {
                                    'type' : 'button',
                                    'class' : 'clusterButton'
                                },
                                content : ' = ',
                                events : {
                                    click : '{#_cluster}'
                                }
                            }
                        ]
                    },
                    {
                        //Right page View (Clustered Data)
                        tag : 'div',
                        props : {
                            'class' : 'clusteredData'
                        },
                        content : [
                            {
                                name : 'RightPageData',
                                type : 'RightPageView'
                            }
                        ]
                    },
                    {
                        tag : "div",
                        props : {
                            "id" : "a1",
                            "class" : "overlay hideOverlay"
                        }
                    },
                    {
                        tag : "div",
                        props : {
                            "id" : "a2",
                            "class" : "tommy hideOverlay"
                        },
                        content : [
                            {
                                tag : "button",
                                props: {
                                    type: 'button',
                                    'class': 'btn btn-default backButton'
                                },
                                content: 'Back to Main Page',
                                events : {
                                    click : '{#_backMainPage}'
                                }
                            },
                            {
                                tag : 'textarea',
                                content : '{jsonContent}',
                                props : {
                                    'placeholder' : 'JSON Data of the topology'
                                }
                            }
                        ]
                    }
                ]
            }
        },
        methods : {
            _cluster : function() {
                data = this.view('leftPageData').view('LeftPageTopology').view('sampleData').data()
                //console.log(data)
                this.model().cluster(data)
            },
            _backMainPage : function() {
                console.log('_backMainPage')
                this.model().jsonContent('')
                $( "#a1").addClass("hideOverlay")
                $( "#a2").addClass("hideOverlay")
            }
        }
    })
})(nx)