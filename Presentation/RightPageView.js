/**
 * Created by ronaklakhwani on 11/27/14.
 */
(function (nx) {
    nx.define('RightPageView', nx.ui.Component, {
        view : {
            content : [
                {
                    name : 'RightPageTopology',
                    type : 'RightPageTopologyView'
                },
                {
                    tag : 'div',
                    props : {
                        'class' : 'rightSaveJsonDiv'
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
        properties: {

        },
        methods : {
            init: function(options) {
                this.inherited(options);
                //console.log('Ronak')
            },
            _openJsonData : function() {
                console.log('_openJsonData')
                $( "#a1").removeClass("hideOverlay")
                $( "#a2").removeClass("hideOverlay")
                var data = this.view('RightPageTopology').view('clusteredData').data()
                this.model().jsonContent(JSON.stringify(data))
            }
        }
    })
})(nx);