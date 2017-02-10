import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reaction } from '../../models/reaction';

@Component({
    selector: 'app-reaction',
    templateUrl: './reaction.component.html',
    styleUrls: ['./reaction.component.css']
})

export class ReactionComponent {
    @Input() reaction: Reaction;
    @Output() continueEmitter = new EventEmitter();

    continue() {
        this.continueEmitter.emit();
    }
}
