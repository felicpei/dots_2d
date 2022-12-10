using System.Collections;
using Puerts;
using UnityEngine;

public static class GlobalCoroutine
{
    public delegate Coroutine StartCoroutineFunc(IEnumerator routine);
    public static StartCoroutineFunc StartCoroutine;
}
