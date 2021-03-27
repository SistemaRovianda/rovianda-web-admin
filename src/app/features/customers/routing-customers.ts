import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from '../quality/layout/layout.component';
import { LayoutModule } from '../quality/layout/layout.module';
import { ListClientsComponent } from './page/list-clients/list-clients.component';
import { ListClientsModule } from './page/list-clients/list-clients.module';
import { RegisterClientComponent } from './page/register-client/register-client.component'
import { RegisterClientModule } from './page/register-client/register-client.module'

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: 'create-client',
                component: RegisterClientComponent
            },{
                path: "list-clients",
                component: ListClientsComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        LayoutModule,
        RegisterClientModule,
        ListClientsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class RoutingCustomers {
}
