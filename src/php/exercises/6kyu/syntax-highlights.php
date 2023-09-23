//* https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript

<?php

function getWrap(String $char)
{
  $type = '';
  if (ctype_digit($char)) $type = 'num';
  else $type = $char;
  $dictionary = ['F' => 'pink', 'L' => 'red', 'R' => 'green', 'num' => 'orange'];
  return '<span style="color: ' . $dictionary[$type] . '">' . $char;
}

function highlight(String $code): String
{
  $chain = str_split($code);
  $result = '';
  $currentType = '';
  foreach ($chain as $char) {
    if ($char === '(' ||  $char === ')') {
      if ($currentType != '') {
        $result .= '</span>';
        $currentType = '';
      }
      $result .= $char;
    } else if ($char === 'F' || $char === 'L' || $char === 'R' || ctype_digit($char)) {
      $newType = ctype_digit($char) ? 'num' : $char;
      if ($newType != $currentType) {
        if ($currentType != '') {
          $result .= '</span>';
        }
        $result .= getWrap($char);
        $currentType = $newType;
      } else {
        $result .= $char;
      }
    }
  }
  if ($currentType != '') {
    $result .= '</span>';
  }
  return $result;
}