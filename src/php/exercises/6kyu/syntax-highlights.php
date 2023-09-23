//* https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript

<?php


function getWrap (String $char) {
  $type = '';
  if(is_int($char)) $type = 'num';
  else $type = $char;
  $dictionary = ['F' => 'pink', 'L' => 'red', 'R' => 'green', 'num' => 'orange'];
    return '<span style="color: ' . $dictionary[$type] . '">'.$char. '</span>';
}
function highlight(String $code) {
  
    // Implement your syntax highlighter here
  }