import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemsService } from '../../services/items.service';
// import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
    RouterModule, FormsModule, CommonModule
  ],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})
export class YoutubeComponent {

  title = 'YouTube API';
  searchInput: string;
  items: any[];
  url: string;


  constructor(private itemsService: ItemsService) {
    this.searchInput = 'Sathyabama University';
    this.items = [];
    this.url = '';
  }

  search() {
    console.log('Search');
    const googleAPIKey = 'AIzaSyALUalk1RpHhgrTfQjiADQMHwJ7Tw87cjQ';
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10';
    url += `&q=${this.searchInput}`;
    url += '&type=video&order=relevance';
    url += '&key=' + googleAPIKey;
    this.url = url;
    console.log(url);

    // fetch the data
    this.itemsService.getItems(url).subscribe((data) => {
      console.log(data);
      const result = data['items'];
      if (result !== undefined) {
        const items: any[] = [];
        result.forEach((element:any) => {
          const id = element['id']['videoId'];
          const title = element['snippet']['title'];
          const description = element['snippet']['description'];
          const thumbnail = element['snippet']['thumbnails']['high']['url'];
          // this.items.push({id, title, description, thumbnail});
          items.push({ id: id, title: title, description: description, thumbnail: thumbnail })
        });
        this.items = items;
      }
    });
  }

}
