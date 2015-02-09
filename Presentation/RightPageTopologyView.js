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
                            label: 'model.id',
                            iconType : 'router'
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