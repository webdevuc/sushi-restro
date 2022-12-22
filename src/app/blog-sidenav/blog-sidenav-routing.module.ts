import { BlogSidenavComponent } from './blog-sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
{   
    path:'' ,
    component:MainComponent,
},
] 

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class BlogSidenavRoutingModuledule { }
