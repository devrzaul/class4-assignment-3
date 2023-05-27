// GPA, CGPA, GRADE function for result publishing
let ban_mark = Number.parseFloat(prompt(`Your bangla subject mark`));
let eng_mark = Number.parseFloat(prompt(`Your English subject mark`));
let math_mark = Number.parseFloat(prompt(`Your math subject mark`));
let sc_mark = Number.parseFloat(prompt(`Your science subject mark`));
let ss_mark = Number.parseFloat(prompt(`Your social sceince subject mark`));
let reli_mark = Number.parseFloat(prompt(`Your Islam subject mark`));
// subject greade variable
let grad;

// subject point variable
let gpa;

/**
 * subject marks 
 * @param {*} marks 
 * @returns Gread & GPA
 */
const getmark = (marks) => {
      
    if (marks > 0 && marks < 33) {
        grad = 'F'
        gpa  =  0
        return `GPA ${gpa} Gread ${grad} `
    } else if (marks >= 33 && marks < 40) {
        grad = 'D'
        gpa  =  1
        return `GPA ${gpa} Gread ${grad} `
    } else if (marks >= 40 && marks < 50) {
        grad = 'C'
        gpa  =  2
        return `GPA ${gpa} Gread ${grad}`
    } else if (marks >= 50 && marks < 60) {
        grad = 'B'
        gpa  =  3
       return `GPA ${gpa} Gread ${grad}`
    } else if (marks >= 60 && marks < 70) {
        grad = 'A-'
        gpa  =  3.5
        return `GPA ${gpa} Gread ${grad}`
    } else if (marks >= 70 && marks < 80) {
        grad = 'A'
        gpa  =  4
       return `GPA ${gpa} Gread ${grad}`
    } else if (marks >= 80 && marks < 100) {
        grad = 'A+'
        gpa  =  5
       return `GPA ${gpa} Gread ${grad}`
    } else{
        b_grad = 'invalid'
        b_gpa  =  'invalid';
    }
}

/**
 * Result Output
 * @param {*} ban 
 * @param {*} eng 
 * @param {*} math 
 * @param {*} sc 
 * @param {*} ss 
 * @param {*} reli 
 * @returns 
 */

const resultCal = (ban, eng, math, sc, ss, reli) =>{

      let ban_result = getmark(ban);
      let eng_result = getmark(eng);
      let math_result = getmark(math);
      let sc_result = getmark(sc);
      let ss_result = getmark(ss);
      let reli_result = getmark(reli);

      let totalCgpa;

      if( ban > 33 && eng > 33 && math > 33 && sc > 33 && ss > 33 && reli > 33 ){
         totalCgpa = (result_ban + result_eng + result_math + result_sc + result_ss + result_reli ) / 6;
      }else{
        totalCgpa = 0;
      }

      return`
          
      Bangla Result = ${ban} / ${ban_result}
      Enaglish Result = ${eng} / ${eng_result}
      Math Result = ${math} /   ${math_result}
      Science Result = ${sc} /  ${sc_result}
      Social Science Result = ${ss} /${ss_result}
      Religion Result = ${reli} / ${reli_result}
      =================================================
      Your CGPA is = ${totalCgpa}
        
      `

}

console.log(resultCal(ban_mark, eng_mark, math_mark, sc_mark, ss_mark, reli_mark));






