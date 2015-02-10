/**
 * Created by ronaklakhwani on 11/28/14.
 */
(function (nx) {
    nx.define('MainViewModel', nx.data.ObservableObject, {
        properties : {
            nodeId : 1,
            linkId : 1,
            newNode : null,
            newLink : null,
            msg : '',
            msgClass : '',
            deleteNodeById : null,
            topologyData : {},
            jsonContent : '',
            fileJsonData : null,
            browseFileTextBoxContent : '',
            browseFileObject : null
        },
        methods : {
            createNode : function() {
                var id = this.nodeId()
                var node = {
                    id : id,
                    x : Math.floor(Math.random() * 100),
                    y : Math.floor(Math.random() * 100)
                }
                this.newNode(node)
                this.nodeId(++id)
                this.msg('Successfully added Node')
                this.msgClass('msgSuccessStyle')
            },
            createLink:function(inLink){
                var id = this.linkId();
                inLink.id = id;
                success = this.newLink(inLink);
                console.log(success)
                this.linkId(++id)
            },
            deleteNode : function(nodeId) {
                console.log(nodeId)
                this.deleteNodeById(nodeId)
            },
            cluster : function(data) {
                console.log('cluster In Model')
                console.log(JSON.stringify(data))

                $.ajax({
                    url: serviceURL,
                    type: 'POST',
                    data: JSON.stringify(data),
                    success: function(response) {
                        console.log(response)
                        /*nodes = response['nodes']
                        links = response['links']
                        nodeSet = response['nodeSet']
                        console.log(nodes)*/
                        this.topologyData(response)
                    }.bind(this)
                });

            },
            loadJsonClick : function() {

                var fileName = this.browseFileTextBoxContent()
                if(fileName && fileName.indexOf('.json') + 5 == fileName.length) {
                    var reader = new FileReader();
                    reader.onload = function(e){
                        debugger
                        try {
                            var data = JSON.parse(e.target.result)
                            if(data.nodes && data.links) {
                                this.fileJsonData(data)
                            } else {
                                alert('Incorrect JSON as it do not contain nodes and links')
                            }
                        } catch(err) {
                            alert('Incorrect JSON')
                        }




                    }.bind(this)
                    reader.readAsText(this.browseFileObject());
                } else {
                    alert('Please select a file')
                }
            }
        }
    })
})(nx)
