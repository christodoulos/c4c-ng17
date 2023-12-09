import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { basicSetup, minimalSetup } from 'codemirror';
import { Compartment, EditorState, Extension } from '@codemirror/state';
import { keymap, EditorView } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { language } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python"
import {
  oneDark,
  oneDarkTheme,
  oneDarkHighlightStyle,
} from '@codemirror/theme-one-dark';

@Component({
  selector: 'app-authoring-tool',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authoring-tool.component.html',
  styleUrls: ['./authoring-tool.component.css']
})
export class AuthoringToolComponent {

  @ViewChild('codeEditor', { static: false }) codeEditor: ElementRef;

  ngAfterViewInit() {
    console.log('Authoring Tool');
    
    let myEditorElement = this.codeEditor.nativeElement;
    let myExt: Extension = [basicSetup, javascript(), oneDark];
    let state!: EditorState;

    try {
      state = EditorState.create({
        doc: 'console.logzzz("hello");\n// type if.',
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
//   let htmlEditor = CodeMirror(document.querySelector(".editor .html-code"),
//   {
//       mode: "xml",
//       tabSize: 4,
//       lineNumbers: true,
//       theme: 'dracula',
//   }
// );
// CodeMirror.commands["selectAll"](htmlEditor);

// document.querySelector("#btn-run").addEventListener("click", function () {
//   let htmlCode = htmlEditor.getValue();
//   let previewWindow = document.querySelector("#preview-window");
//   previewWindow.innerHTML = htmlCode
// });


}
