/**
 * Created by ronaklakhwani on 11/27/14.
 */
(function (nx) {
    nx.define('LeftPageView', nx.ui.Component, {
        view : {
            content : [
                {
                    name : 'ActionPanel',
                    type : 'ActionPanelView'
                },
                {
                    name : 'LeftPageTopology',
                    type : 'LeftPageTopologyView',
                    props : {
                        newNode : '{newNode}',
                        newLink : '{newLink}',
                        deleteNodeById : '{deleteNodeById}',
                        fileJsonData : '{fileJsonData}'
                    }
                },
                {
                    tag : 'div',
                    props : {
                        'class' : 'leftSaveJsonDiv'
                    },
                    content : [
                        {
                            tag : 'button',
                            props : {
                                'type' : 'button',
                                'class' : 'leftSaveJsonButton'
                            },
                            content : 'Open Json',
                            events : {
                                click : '{#_openJsonData}'
                            }
                        }
                    ]
                }
            ]
        },
        methods : {
            _openJsonData : function() {
                console.log('_openJsonData')
                $( "#a1").removeClass("hideOverlay")
                $( "#a2").removeClass("hideOverlay")
                var data = this.view('LeftPageTopology').view('sampleData').data()
                this.model().jsonContent(JSON.stringify(data))
            }
        }
    })
})(nx);