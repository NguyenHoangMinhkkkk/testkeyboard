package com.testkeyboard;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "testkeyboard";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      // Utils.setStatusBar(MainActivity.this);
      // Utils.setDefaultSystemBar(MainActivity.this);

      super.onCreate(null);
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
      this,
      getMainComponentName(),

      DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled

      DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
    );
  }
}
