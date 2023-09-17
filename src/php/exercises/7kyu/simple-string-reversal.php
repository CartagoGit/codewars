//* https://www.codewars.com/kata/5a71939d373c2e634200008e/train/php


<?php
function solve(string $chain): string
{
    $positionSpaces = [];
    for ($i = 0; $i < strlen($chain); $i++) {
        if ($chain[$i] === ' ') {
            $positionSpaces[] = $i;
        }
    }
    $unionChain = str_replace(' ', '', $chain);
    $reverseChain = strrev($unionChain);
    $result = '';
    $spaceIndex = 0;

    for ($i = 0; $i < strlen($chain); $i++) {
        if (in_array($i, $positionSpaces)) {
            $result .= ' ';
            $spaceIndex++;
        } else {
            $result .= $reverseChain[$i - $spaceIndex];
        }
    }
    return $result;
}
