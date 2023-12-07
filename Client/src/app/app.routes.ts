import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';

export const routes: Routes = [
    {path:'home', component :HomeComponent},
    {path:'manga', component :MangaComponent},
    {path:'',redirectTo:'/home',pathMatch: 'full'}

];
