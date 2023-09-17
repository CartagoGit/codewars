// * https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/php

<?php
function pillars($numberOfPillars, $dist, $width): int
{
    return $numberOfPillars <= 1 ? 0 : ($numberOfPillars - 1) * $dist * 100 + ($numberOfPillars - 2) * $width;
}


echo pillars(1, 10, 10);
