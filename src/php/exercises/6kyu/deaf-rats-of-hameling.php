//* https://www.codewars.com/kata/598106cb34e205e074000031/train/php

<?php

function countDeafRats($town)
{
    $town = str_replace(' ', '', $town);
    //* Chars
    $hamelin = 'P';
    $ratToRight = '~O';
    $ratToLeft = 'O~';

    // * Separate chains
    list($beforeP, $afterP) = explode($hamelin, $town);

    // * Separate rats
    $ratsBeforeP = implode(' ', str_split($beforeP, 2));
    $ratsAfterP = implode(' ', str_split($afterP, 2));

    // * Count deaf rats
    $deafRatsBefore = substr_count($ratsBeforeP, $ratToLeft);
    $deafRatsAfter = substr_count($ratsAfterP, $ratToRight);
    return $deafRatsBefore + $deafRatsAfter;
}
