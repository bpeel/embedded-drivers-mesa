void main()
{
        /* Choose the colour based on the X-position of the pixel */
        gl_FragColor = vec4(gl_FragCoord.x * 0.008 - 1.0, 0.0, 0.0, 1.0);
}
