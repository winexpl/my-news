import { ActivatedRoute, Router, Routes } from '@angular/router';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { LayoutComponent } from './ui/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'news', component: NewsPageComponent },
            { path: '**', redirectTo: 'news' } // Используем относительный путь
        ]
    },
];