//* https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript

<?php


function getWrap(String $char)
{
  $type = '';
  if (ctype_digit($char)) $type = 'num';
  else $type = $char;
  $dictionary = ['F' => 'pink', 'L' => 'red', 'R' => 'green', 'num' => 'orange'];
  return '<span style=<"color: ' . $dictionary[$type] . '">' . $char;
}
function highlight(String $code): String
{
  $chain = str_split($code);
  $index  = 0;
  $result = '';
  $intoBrackets = 0;
  $isSameChar = false;
  foreach ($chain as $char) {
    if ($char === '(' ||  $intoBrackets !== 0) {
      if ($char === '(') $intoBrackets++;
      else if ($char === ')') $intoBrackets--;
    } else if ($char === 'F' || $char === 'L' || $char === 'R' || ctype_digit($char)) {
      if (!$isSameChar)
        $char = getWrap($char);
      if (count($chain) > $index + 1 &&  $char === $chain[$index + 1]) $isSameChar = true;
      else {
        $isSameChar = false;
        $char .= '</span>';
      };
    }

    $result .= $char;
    $index++;
  }

  return $result;
}
