import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() foodPageTags ? : string [] ;
  @Input() justifyContent :string = 'center';
  tags?: Tag[] ;
  constructor(private service : FoodService){}

  ngOnInit(): void {
    // To display only tags for one food is not null
    if (!this.foodPageTags)
    this.tags = this.service.getAllTag()
  }

}
