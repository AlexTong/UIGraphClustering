/**
 * Created by ronaklakhwani on 12/4/14.
 */
/**
 * Created by ronaklakhwani on 11/27/14.
 */
(function (nx) {
    nx.define('RightPageTopologyView',nx.ui.Component, {
        view : {
            content : [
                {
                    name : 'clusteredData',
                    type: 'nx.graphic.Topology',
                    props: {
                        width:800,
                        height:940,
                        adaptive:true,
                        showIcon: true,
                        theme: 'green',
                        identityKey: 'id',
                        data: '{topologyData}',
                        nodeConfig: {
                            label: function(vertex) {
                                console.log("id : " + vertex['_data']['id'] + " Role : " + vertex['_data']['role'][0])
                                return "id : " + vertex['_data']['id'] + " Role : " + vertex['_data']['role'][0]
                            },
                            color: function(node, model) {
                                console.log(node['_data']['role'])
                                return colorDict[node['_data']['role'].toLowerCase()]
                            }
                        },
                        nodeSetConfig: {
                            label: function(vertex) {
                                //console.log("id : " + vertex['_data']['id'] + " Role : " + vertex['_data']['role'][0])
                                return "id : " + vertex['_data']['id']
                            }
                        }
                    }
                }
            ],
            props : {
                'class' : 'rightPageTopology'
            }
        }
    })
})(nx)