import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
	providedIn: 'root'
})

export class DataService {
    private nodes: TreeNode[];
    constructor(private http: HttpClient) { 

    }

    public getTree() {
        this.nodes = [];

        for (let i=1; i <= 10; i++) {
            let t = new TreeNode('n' + i);
            for(let j=1; j<=2; j++) {
                let c = new TreeNode('c' + i + '.' + j);
                t.children.push(c);
            }
            this.nodes.push(t)
        }
        
        return this.nodes;
    }
}

class TreeNode {
    constructor(n: string, c?: TreeNode[]) {
        this.name = n;
        this.children = [];
    }
    name: string;
    children: TreeNode[];
} 