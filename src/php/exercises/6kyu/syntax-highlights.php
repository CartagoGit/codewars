//* https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript

<?php


function getWrap(String $char)
{
  $type = '';
  if (is_int($char)) $type = 'num';
  else $type = $char;
  $dictionary = ['F' => 'pink', 'L' => 'red', 'R' => 'green', 'num' => 'orange'];
  return '<span style=<\"color: ' . $dictionary[$type] . '\">' . $char;
}
function highlight(String $code): String
{
  $chain = explode('', $code);
  $index  = 0;
  $result = '';
  $isInBrackets = false;
  $isSameChar = false;
  foreach ($chain as $char) {
    if($char === '(' ||  $isInBrackets){
      $isInBrackets = true;
      if($char === ')') $isInBrackets = false;
    }
    else if ($char === 'F' || $char === 'L' || $char === 'R' || is_int($char)) {
      if (!$isSameChar)
        $char = getWrap($char);
      if ($char === $chain[$index + 1]) $isSameChar = true;
      else $isSameChar = false;
    }

    $result .= $char;
    $index++;
  }

  return $result;
}
