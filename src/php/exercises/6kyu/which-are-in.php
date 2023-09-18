//* https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/php

<?php

function inArray($array1, $array2)
{
    $result = [];
    foreach ($array1 as $value1) {
        foreach ($array2 as $value2) {
            if (strpos($value2, $value1) !== false) {
                $result[] = $value1;
                break;
            }
        }
    }
    sort($result);
    return $result;
}
