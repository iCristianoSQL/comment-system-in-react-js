import { darken, transparentize } from "polished"

export const colors = {
    primary: {
        0: '#000',
        0.1: transparentize(0.6, '#000'),
        0.2: darken(0.2, '#000'),
        1: '#FFFFFF',
        1.1: transparentize(0.6, '#FFFFFF'),
        1.2: darken(0.2, '#FFFFFF'),
        2: '#777777',
        2.1: transparentize(0.6, '#777777'),
        2.2: transparentize(0.2, '#777777'),
    },
    danger: {
        0: '#a10000',
        0.1: transparentize(0.9, '#a10000'),
        0.2: darken(0.9, '#a10000'),
    },
    valid: {
        0: '#024d06',
        0.1: transparentize(0.2, '#024d06'),
        0.2: darken(0.9, '#024d06'),
    }
}