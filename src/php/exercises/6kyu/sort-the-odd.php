//* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/php

<?php

function sortArray(array $arr): array
{
    $index = 0;
    list($evens, $odds) = array_reduce($arr, function ($result, $value) use (&$index) {
        $result[$index % 2 === 0 ? 'evens' : 'odds'][] = $value;
        $index++;
        return $result;
    }, ['evens' => [], 'odds' => []]);

    $finalArray = [];
    sort($odds);
    for ($i = 0; $i < count($arr); $i++) {
        $finalArray[] = $i % 2 === 0 ? array_shift($evens) : array_shift($odds);
    }
    return $finalArray;
}
