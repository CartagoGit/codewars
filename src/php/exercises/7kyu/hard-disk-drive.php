//* https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/php


<?php


function save($sizes, $hd)
{
    $counter = 0;
    $times = 0;
    foreach ($sizes as $size) {
        if ($hd >= ($size + $counter)) {
            $times++;
            $counter += $size;
        } else  break;
    }
    return $times;
}


