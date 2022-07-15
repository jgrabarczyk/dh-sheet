import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { AttributeListComponent } from './components/attribute-list/attribute-list.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExpBarComponent } from './components/exp-bar/exp-bar.component';
import { InfoboxComponent } from './components/infobox/infobox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FateBarComponent } from './components/fate-bar/fate-bar.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { TalentsListComponent } from './components/talents-list/talents-list.component';
import { TalentComponent } from './components/talent/talent.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { WeaponComponent } from './components/weapon/weapon.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeListComponent,
    SkillListComponent,
    SkillComponent,
    ExpBarComponent,
    FateBarComponent,
    InfoboxComponent,
    AptitudesComponent,
    TalentComponent,
    TalentsListComponent,
    WeaponListComponent,
    WeaponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
