# ANGULAR Directives deep dive.
### Repository
https://github.com/serotonine/a-02-directives-deep-dive


### About
Build [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller) Directives Deep Dive: See below links.

***

### ANGULAR 17 
#### Summary
Directives are classes adding behaviours to the DOM elements. Unlike components, they are ***without template***
##### Attributes Directives
Directives set as attribute in the template.
- Example: `ngModel`
- [Custom Attribute Directive lesson](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115886)
- [Working with inputs in Custom Directive](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115894)
- [Directives & Dependency Injection](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115898)
##### Structural Directives
- Example: `*ngIf="myCondition"` (Before Angular 17)
- [Custom Structural Directive](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115902)
- [`ng-template`](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115914)
- [`*ng-if`, `*ng-auth`]I did mention before that this asterisk here in front of a directive is syntactic sugar for using `ng-template`. So instead of using NG template like this you could also add your paragraph like that and add the app auth directive directly on it, but now prefixed with this asterisk.
- [`hostDirectives` : Apply a structural directive on multiple components](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115924)
