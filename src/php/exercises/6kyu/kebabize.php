//* https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/php

<?php

function kebabize($string)
{
    echo $string;
    while (!ctype_alpha(substr($string, 0, 1)))  $string = substr($string, 1);
    $string = lcfirst($string);
    return implode(array_map(function ($char) {
        if (!ctype_alpha($char)) return '';
        if (ctype_upper($char)) $char = '-' . strtolower($char);
        return $char;
    }, str_split($string)));
}
