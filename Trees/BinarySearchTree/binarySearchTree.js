class Node {
    constructor(value) {
        this.value = value ? value : null
        this.left = null;
        this.right = null

    }
}

export default class BinarySearchTree {
    constructor(value) {
        this.root = value ? new Node(value) : null
    }
    //function to insert node;
    insertNode = (value) => {
        let currNode = this.root;
        let newNode = new Node(value)

        //if root is empty then we make the new node the parent node;
        if (currNode === null) {
            this.root = newNode;
            return undefined;
        }



        while (currNode !== null) {
            //check if value of node to add is less than the currentNode
            if (val < currNode.value) {
                if (currNode.left === null) {
                    currNode.left = newNode;
                    return undefined
                }
                //if current left node isn't empty, set current node to the left node
                else {
                    currNode = currNode.left;
                }
            }
            //check if value of node to add is greater than the currentNode
            else if (val > currNode.value) {
                if (currNode.right === null) {
                    currNode.right = newNode;
                    return undefined
                }
                //if current right node isn't empty, set current node to the right node
                else {
                    currNode = currNode.right;
                }
            }
            else {
                console.log('Value already exists within the tree')
                return null;
            }

        }

    }
    //Method to add node recursively
    addNode = (value) => {
        if (this.root === null) {
            this.root = new Node(value)
        }
        else {
            this.recAddNode(this.root, value)
        }

    }
    //Helper function
    recAddNode = (node, value) => {
        let newNode = new Node(value)

        //If the the value of new node to add is less than the current node,
        //navigate to left subtree of that node
        if (node.value === null) {
            this.root = newNode;
            return undefined;
        }



        if (value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.recAddNode(node.left, value)
            }

        }
        //value is greater than
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.recAddNode(node.right, value)
            }

        }

    }

    findMin = () => {
        let currNode = this.root;

        //if tree is empty return null
        if (currNode === null) {
            console.log('empty tree')
            return null
        }
        else {
            //loop to travel down the left subtree and it's nodes
            while (currNode.left !== null) {
                //compares current value of node to the one left of it
                if (currNode.value > currNode.left.value) {
                    currNode = currNode.left;
                }
                else {
                    return currNode.value;
                }
            }
            return currNode.value;
        }
    }

    findMax = () => {
        let currNode = this.root;

        //if tree is empty return null
        if (currNode === null) {
            console.log('empty tree')
            return null
        }
        else {
            //loop to travel down the right subtree and it's nodes
            while (currNode.right !== null) {
                //compares current value of node to the one right of it
                if (currNode.value < currNode.right.value) {
                    currNode = currNode.right;
                }
                else {
                    return currNode.value;
                }
            }
            return currNode.value;
        }
    }

    //Now a method to find min and max recursively
    recFindMax = (root = this.root) => {
        if (root.right === null) {
            return root.value;
        }
        else {
            return this.recFindMax(root.right)
        }

    }

    recFindMin = (root = this.root) => {
        if (root.left === null) {
            return root.value;
        }
        else {
            return this.recFindMin(root.left)
        }
    }

    //checks if element is present in a bst
    isPresent = (value) => {
        if (this.root === null) {
            return false
        }
        else {
            let currNode = this.root;
            //While currNode isn't null search the tree for the value
            while (currNode) {
                if (currNode.value === value) {
                    return true
                }
                else if (currNode.value < value) {
                    currNode = currNode.right;
                }
                else if (currNode.value > value) {
                    currNode = currNode.left;
                }

            }
            return false
        }

    }
    recIsPresent = (value, root = this.root) => {
        if (root === null) {
            return false;
        }
        else {
            let currNode = root;

            if (currNode.value < value) {
                return this.recIsPresent(value, currNode.right)
            }
            else if (currNode.value > value) {
                return this.recIsPresent(value, currNode.left)
            }
            else {
                return true;
            }
        }
    }

}