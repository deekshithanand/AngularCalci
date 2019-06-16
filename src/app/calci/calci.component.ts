import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
  constructor() {
    this.res = '0';
   }

  res: string;
     else;
   call9() {
     this.res += '9';
   }
   call8() {
     this.res += '8';
   }
   call7() {
     this.res += '7';

   }
   call6() {
     this.res += '6';

   }
   call5() {
     this.res += '5';
   }
   call4() {
     this.res += '4';
   }
   call3() {
     this.res += '3';
   }
   call2() {
     this.res += '2';
   }
   call1() {
     this.res += '1';
   }
   callp() {
     this.res += '+';
   }
   calls() {
     this.res += '-';
   }
   callm() {
     this.res += '*';
   }
   calld() {
     this.res += '/';
   }





call0() {
     this.res += '0';
   }
cut() {
     this.res = '0';
   }
   prec(c) {
    if (c == '^') {
    return 3;
    } else if (c == '*' || c == '/') {
    return 2;
 } else if (c == '+' || c == '-') {
    return 1;
 } else {
    return -1;
 }
}
evaluate(op: any[]) {
  const res: number[] = [];
  let n1: number;
  let n2: number;
  for (let i = 0; i < op.length; i++) {
      if (typeof(op[i]) == 'number') {
          res.push(op[i]);
      } else {
          switch (op[i]) {
              case '+': n1 = res.pop();
                        n2 = res.pop();
                        res.push(n1 + n2); break;
              case '-': n2 = res.pop();
                        n1 = res.pop();
                        res.push(n1 - n2); break;
              case '*': n1 = res.pop();
                        n2 = res.pop();
                        res.push(n1 * n2); break;
              case '/': n2 = res.pop();
                        n1 = res.pop();
                        res.push(n1 / n2); break;
              default:
          }
      }

  }
  return(res[res.length - 1]);

}
infixToPostfix() {
  const op: any[] = [];
  let nums = '';
  const opstack: string[] = ['$'];
  for (let i = 0; i < this.res.length; i++) {
      if (this.res[i] >= '0' && this.res[i] <= '9') {
          nums += this.res[i];
      } else {
          if (nums != '') {
              op.push(parseInt(nums, 10));
              nums = '';
          }
          if (this.prec(this.res[i]) > this.prec(opstack[opstack.length - 1])) {
              opstack.push(this.res[i]);
          } else {
              while (opstack[opstack.length - 1] !== '$' && this.prec(this.res[i]) <= this.prec(opstack[opstack.length - 1])) {
                  op.push(opstack.pop());
              }
              opstack.push(this.res[i]);
          }

      }
  }
  if (nums !== '') {
      op.push(parseInt(nums));
      nums = '';
  }
  while (opstack[opstack.length - 1] !== '$') {
      op.push(opstack.pop());
  }
  let yea=this.evaluate(op);
  let fres = ''; if( isNaN(yea)){
      fres="ERROR PRESS C AND GO";
  }else{
    fres+=yea;
  }
  
  this.res = fres;

}


ngOnInit() {
  }

}
