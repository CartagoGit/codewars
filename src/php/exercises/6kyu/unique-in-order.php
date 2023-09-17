//* codewars.com/kata/54e6533c92449cc251001667/train/php

<?php


function uniqueInOrder($iterable): array
{
  if (empty($iterable)) {
    return [];
  }
  if (is_array($iterable)) {
    $chars = $iterable;
  } elseif (is_string($iterable)) {
    $chars = str_split($iterable);
  } else {
    return [];
  }

  $list = [$chars[0]];
  for ($i = 1; $i < count($chars); $i++) {

    if ($chars[$i] !== $chars[$i - 1]) {
      $list[] =  $chars[$i];
    }
  }

  return $list;
}
