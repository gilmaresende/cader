package com.condelar.cader;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true); // Ative o JavaScript, se necessário.
        webView.setWebViewClient(new WebViewClient()); // Para carregar a página no WebView, em vez de abrir o navegador.

        webView.loadUrl("http://condelar.ddns.net:3005/"); // Substitua com a URL do site que deseja carregar.
    }
}
