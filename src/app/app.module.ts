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

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeListComponent,
    SkillListComponent,
    SkillComponent,
    ExpBarComponent,
    InfoboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
