import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//components
import { LayoutComponent } from '../quality/layout/layout.component';
import { MachineComponent } from './page/machine/machine.component';

//modules
import { LayoutModule } from '../quality/layout/layout.module';
import { MachineModule } from './page/machine/machine.module';

const routes:Routes=[
{
    path: "",
    component: LayoutComponent,
    children:[
        {
            path: "machine",
            component: MachineComponent
        }
    ]
}
]

@NgModule({
    declarations:[],
    imports:[
        MachineModule,
        LayoutModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})

export class MachineRouting {
}
