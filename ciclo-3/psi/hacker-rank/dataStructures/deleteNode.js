function deleteNode(node, position) {
    let aux = node
    if(position == 0){
        node = node.next
    }
    for(let i = 0;i < position - 1;i++){
        aux = aux.next
    }
    let rmNode = aux.next
    aux.next = rmNode.next
    return node
}