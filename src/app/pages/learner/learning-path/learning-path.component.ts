import { Component, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { basicSetup, minimalSetup } from 'codemirror';
import { Compartment, EditorState, Extension } from '@codemirror/state';
import { keymap, EditorView } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { language } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python"
import { dracula, draculaInit  } from '@uiw/codemirror-theme-dracula';
import { ActivatedRoute } from '@angular/router'

import { HintComponent } from 'projects/ui/src/lib/hint/hint.component';
import { TheoryComponent } from 'projects/ui/src/lib/theory/theory.component';

@Component({
  selector: 'app-learning-path',
  standalone: true,
  imports: [CommonModule, HintComponent, TheoryComponent],
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.scss']
})
export class LearningPathComponent implements AfterViewInit {
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  language: string | undefined;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.language = this.route.snapshot.params['language'];
  }

  ngAfterViewInit() {
    let myEditorElement = this.codeEditor.nativeElement;
    let myExt: Extension = [basicSetup, javascript(), dracula];
    let state!: EditorState;
    const codeEditor = document.querySelector(".editor .html-code");

    try {
      state = EditorState.create({
        doc: 'console.log("hello");\n// type if.',
        extensions: myExt,
      });
    } catch (e) {
      //Please make sure install codemirror@6.0.1
      //If your command was npm install codemirror, will installed 6.65.1(whatever)
      //You will be here.
      console.error(e);
    }

    //console.log(state);
    
    let view = new EditorView({
      state,
      parent: myEditorElement,
    });
    // let language = new Compartment, tabSize = new Compartment
    // const languageConf = new Compartment;

    // const autoLanguage = EditorState.transactionExtender.of(tr => {
    //   if (!tr.docChanged) return null;
    //   let docIsHTML = /^\s*</.test(tr.newDoc.sliceString(0, 100));
    //   let stateIsHTML = tr.startState.facet(language) == htmlLanguage;
    //   if (docIsHTML == stateIsHTML) return null;
    //   return {
    //     effects: languageConf.reconfigure(docIsHTML ? html() : javascript())
    //   }
    // });

    // let state = EditorState.create({
    //   doc: 'console.log("hello")',
    //   extensions: [
    //     basicSetup,
    //     language.of(python()),
    //     // autoLanguage,
    //     tabSize.of(EditorState.tabSize.of(4))
    //   ]
    // })
    
    // let view = new EditorView({
    //   state,
    //   parent: this.codeEditor.nativeElement
    // });    

   
 }
}
