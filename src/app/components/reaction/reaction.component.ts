import { Component, Input } from '@angular/core';
import { Reaction } from '../../models/reaction';

@Component({
    selector: 'app-reaction',
    templateUrl: './reaction.component.html',
    styleUrls: ['./reaction.component.scss']
})

export class ReactionComponent {
    @Input() reaction: Reaction;
}
