//* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/php

<?php

function sortArray(array $arr): array
{
    ['evens' => $evens, 'odds' => $odds] = array_reduce($arr, function ($result, $value) {
        $result[$value % 2 === 0 ? 'evens' : 'odds'][] = $value;
        return $result;
    }, ['evens' => [], 'odds' => []]);

    $finalArray = [];
    sort($odds);
    for ($i = 0; $i < count($arr); $i++) {
        $finalArray[] = $arr[$i] % 2 === 0 ? array_shift($evens) : array_shift($odds);
    }
    return $finalArray;
}

